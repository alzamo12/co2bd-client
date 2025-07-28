import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import StarRatings from 'react-star-ratings';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';

const Comment = ({ c }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const userEmail = user?.email;
    const { _id } = c;
    const { data: like } = useQuery({
        queryKey: ['like', _id, userEmail],
        queryFn: async () => {
            const res = await axiosSecure.get(`/like?targetId=${_id}&userEmail=${userEmail}`);
            console.log(res)
            return res.data
        }
    })

    const { mutateAsync: likeAsync, isPending: likePending } = useMutation({
        mutationFn: async (likeData) => {
            const res = await axiosSecure.post(`/likes`, likeData);
            return res.data
        },
        onSuccess: async (data) => {
            toast.success("you have liked Successfully")
            queryClient.invalidateQueries(['like'])
            console.log(data)
        }
    });

    const { data: commentLikeCount } = useQuery({
        queryKey: ['eventLikeCount', _id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/eventLikeCount/${_id}`)
            console.log("event like count", res.data)
            return res.data
        }
    });

    const { mutateAsync: deleteLike } = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecure.delete(`/like/${id}`);
            return res.data
        },
        onSuccess: (data) => {
            toast.success("like removed successfully")
            queryClient.invalidateQueries(['like'])
            console.log(data)
        }
    });

    const handleLike = async () => {
        const likeData = {
            target_id: _id,
            target_type: 'comment',
            user_email: user?.email,
        };
        likeAsync(likeData)
    };

    const handleDeleteLike = async (id) => {
        deleteLike(id)
    };

    return (
        <div key={c?._id} className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
                <img src={c?.userPhoto} alt="" className="w-8 h-8 rounded-full" />
                <span className="font-medium">{c?.userName}</span>
                <StarRatings
                    rating={c?.rating}
                    starDimension="16px"
                    starSpacing="2px"
                    starRatedColor="#f59e0b"
                />
            </div>
            <p>{c?.text}</p>
            <div className='flex gap-2'>
                <small className="text-gray-500">{new Date(c?.commentedDate).toLocaleString()}</small>
                {
                    likePending ?
                        <div>
                            <button disabled={true}><FaHeart className="text-lg" /></button>
                            <span>{commentLikeCount}</span>
                        </div> :
                        like ?
                            <div>
                                <button
                                    onClick={() => handleDeleteLike(like?._id)}
                                ><FaHeart className="text-lg text-red-500" /></button>
                                <span>{commentLikeCount}</span>
                            </div>
                            :
                            <div>
                                <button onClick={() => handleLike()}><FaHeart className="text-lg" /></button>
                                <span>{commentLikeCount}</span>
                            </div>
                }
            </div>
        </div>
    );
};

export default Comment;