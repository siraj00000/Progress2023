import ComboboxComponent from "../../components/others/ComboBox";
import { AccountType } from "../../contants";

const UserManagementPage = () => {
  return (
    <div className="px-48 py-32 flex flex-col gap-[32px]">
      <section>
        <h4 className="text-20 text-white poppins600">Invite User</h4>

        <div className="flex items-end gap-4">
          <label
            htmlFor="emailAddressInput"
            className="poppins400 text-white text-15 mt-12 flex flex-col"
          >
            Email
            <input
              type="email"
              id="emailAddressInput"
              placeholder="Type confirmation code"
              className="custom-input-field"
            />
          </label>
          <label
            htmlFor="emailAddressInput"
            className="poppins400 text-15 mt-12 flex flex-col"
          >
            <span className="text-white">Role</span>
            <ComboboxComponent data={AccountType} placeholder="Select" />
          </label>
          <button className="custom-button poppins600 text-white">
            Invite
          </button>
        </div>
      </section>

      <section>
        <h4 className="text-20 text-white poppins600">Invite User</h4>

        {/* Users Table */}
        <table className="w-full table-fixed text-left text-white my-16">
          <thead className="text-15 h-32">
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Date Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-14">
            <tr>
              <td>example@mail.com</td>
              <td>Admin</td>
              <td>01.01.23</td>
              <td className="flex items-center gap-3">
                <button className="bg-dark px-12 py-1 rounded-16 text-white text-15 poppins600">
                  Change Role
                </button>
                <button className="bg-redDark px-12 py-1 rounded-16 text-white text-15 poppins600">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default UserManagementPage;
