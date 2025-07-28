import StarRatings from 'react-star-ratings';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useState } from 'react';
import CommentsListing from './CommentsListing';
import AddComment from './AddComment';

const Comments = ({ eventId }) => {
    const queryClient = useQueryClient();
    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1);
    const limit = 2;
    // Fetch existing comments
    const { data: { comments = [], commentsCount } = {}, isLoading } = useQuery({
        queryKey: ['comments', eventId, limit, page],
        queryFn: async () => {
            const res = await axiosSecure.get(`/comments?eventId=${eventId}&page=${page}&limit=${limit}`);
            return res.data
        }
    })

    // Mutation for posting comments
    const { mutateAsync: postComment } = useMutation({
        mutationFn: async (newComment) => {
            const res = await axiosSecure.post(`/comments`, newComment);
            return res.data
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['comments', eventId]);
            console.log(data)
            toast.success("You have rated the event")
        }
    })

    // Form for new comments
    const { register, handleSubmit, reset, setValue, watch } = useForm({
        defaultValues: { text: '', rating: 5 }
    });
    const rating = watch('rating');

    const totalPages = Math.ceil(commentsCount / limit);


    const onSubmit = async (formData) => {
        const commentData = {
            ...formData,
            eventId
        };
        await postComment(commentData);
        reset({ text: '', rating: 5 });
    };

    // if (isLoading) return <LoadingSpinner />

    return (
        <div className="space-y-10 mt-12">

            {/* New comment form */}
            <AddComment
                handleSubmit={handleSubmit}
                register={register}
                setValue={setValue}
                rating={rating}
                onSubmit={onSubmit}
            />
            <CommentsListing
                comments={comments}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                isLoading={isLoading} />
        </div>
    );
};

export default Comments
