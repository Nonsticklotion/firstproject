import "../css/widebox.css";
import "./UserPage.css"
import UserAddress from "../layout/User/UserAddress";
import UserPurchase from "../layout/User/UserPurchase";
function UserPage() {
  return (
    <>
      <div className="widebox">
        <div className="container">
          <UserAddress />
          <UserPurchase />
        </div>
      </div>
    </>
  );
}

export default UserPage;
