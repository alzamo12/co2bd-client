import StarRatings from 'react-star-ratings';
import { useForm } from 'react-hook-form';
import CommentsListing from './CommentsListing';
import AddComment from './AddComment';

const Comments = ({ eventId,eventTitle, comments, commentsCount, isLoading, page, limit, postComment, setPage }) => {

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
                eventTitle={eventTitle}
                eventId={eventId}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                isLoading={isLoading} />
        </div>
    );
};

export default Comments
