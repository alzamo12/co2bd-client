import StarRatings from 'react-star-ratings';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';

const CommentsListing = ({ comments, setPage, page, totalPages, isLoading }) => {
    if (isLoading) return <LoadingSpinner />
    return (
        <div className='space-y-6'>
            <h3 className="text-xl font-semibold">Comments & Ratings</h3>
            {/* List existing comments */}
            {comments?.map(c => (
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
                    <small className="text-gray-500">{new Date(c?.commentedDate).toLocaleString()}</small>
                </div>
            ))}

            <div className="join grid grid-cols-3 w-96">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page <= 1}
                    className="join-item btn btn-outline">Previous page</button>
                <span className='text-center my-auto'>page {page} of {totalPages}</span>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages}
                    className="join-item btn btn-outline">Next</button>
            </div>
        </div>
    );
};

export default CommentsListing;