import React from 'react';
import StarRatings from 'react-star-ratings';

const AddComment = ({ handleSubmit, onSubmit, rating, setValue, register }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block mb-1 font-medium">Your Rating:</label>
                <StarRatings
                    rating={rating}
                    starRatedColor="#f59e0b"
                    changeRating={rate => setValue('rating', rate)}
                    numberOfStars={5}
                    starDimension="24px"
                    starSpacing="4px"
                />
            </div>
            <textarea
                {...register('text', { required: true })}
                placeholder="Write your comment…"
                className="w-full p-2 border rounded"
            />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AddComment;