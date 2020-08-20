import React from 'react';

const UsersTable = ({ users }) => {
    return (
        <div>
            <table className="table table-sm table-responsive-md">
                <thead>
                    <tr>
                        <td className="text-center"><p>SL</p></td>
                        <td><p>Name</p></td>
                        <td><p>E-mail</p></td>
                        <td className="text-center"><p>Action</p></td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map((user, i) =>
                        <tr key={i}>
                            <td className="text-center"><p>{i + 1}</p></td>
                            <td><p>{user.name}</p></td>
                            <td><p>{user.email}</p></td>
                            <td className="text-center">
                                <buton type="button" className="btn btn-light rounded-0 shadow-none">Block</buton>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;