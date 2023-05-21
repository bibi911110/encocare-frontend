import MembershipCard from '../../../components/profile/MembershipCard/MembershipCard';
import paymentMethodImage from '../../../assets/images/payments/method.png';
import './Membership.scss';

const membershipData = [
    {
        title: 'Individual',
        price: 20,
        primaryColor: '#FFA000',
        secondColor: '#FFECCC',
        iconType: 'normal',
        popular: false,
    },
    {
        title: "Doctor's",
        price: 50,
        primaryColor: '#0089FF',
        secondColor: '#CCE7FF',
        iconType: 'circle',
        popular: true,
    },
    {
        title: 'Enterprise',
        price: 120,
        primaryColor: '#00C770',
        secondColor: '#CCF4E2',
        iconType: 'circle',
        popular: false,
    },
];

const Membership = () => {
    return (
        <div className="profile-membership">
            <div className="membership-header">
                <div className="title-wrapper">
                    <h1>MEMEBRSHIP PLANS</h1>
                    <p>Curated and discounted packages for individual, team or enterprise!</p>
                </div>
                <div className="method-wrapper">
                    <p>Accepted Methods:</p>
                    <img src={paymentMethodImage} alt="" />
                </div>
            </div>

            <div className="membership-content">
                {membershipData.map((item) => (
                    <div className="content-col" key={item.title}>
                        <MembershipCard
                            title={item.title}
                            price={item.price}
                            primaryColor={item.primaryColor}
                            secondColor={item.secondColor}
                            popular={item.popular}
                            iconType={item.iconType === 'circle' ? 'circle' : 'normal'}
                        />
                    </div>
                ))}
            </div>

            <div className="support-link">
                <p>
                    Have a problem? Contact <span>Customer Support Team</span>
                </p>
            </div>
        </div>
    );
};

export default Membership;
