import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const confirmAdminPromotion = (username) => {
    MySwal.fire({
        title: <strong>Promote {username}?</strong>,
        html: <p>Are you sure you want to make this user an admin?</p>,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, make admin',
        cancelButtonText: 'No, cancel',
        background: '#e8f5e9',
        iconColor: '#1b5e20',
        confirmButtonColor: '#388e3c',
        cancelButtonColor: '#c8e6c9',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log(`${username} promoted to admin`);
        }
    });
};

export default confirmAdminPromotion