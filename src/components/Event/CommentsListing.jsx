import StarRatings from 'react-star-ratings';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import Comment from './Comment';

const CommentsListing = ({ comments, setPage, page, totalPages, isLoading , eventTitle, eventId}) => {
    if (isLoading) return <LoadingSpinner />
    return (
        <div className='space-y-6'>
            <h3 className="text-xl font-semibold">Comments & Ratings</h3>
            {/* List existing comments */}
            {comments?.map(c => (
                <Comment eventId={eventId} eventTitle={eventTitle} key={c._id} c={c} />
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