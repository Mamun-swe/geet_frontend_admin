import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SongTable = ({ songs }) => {
    return (
        <div>
            <table className="table table-sm table-responsive-md">
                <thead>
                    <tr>
                        <td className="text-center"><p>SL</p></td>
                        <td><p>Name</p></td>
                        <td><p>Album</p></td>
                        <td><p>Singer</p></td>
                        <td className="text-center"><p>Action</p></td>
                    </tr>
                </thead>
                <tbody>
                    {songs.length > 0 && songs.map((song, i) =>
                        <tr key={i}>
                            <td className="text-center"><p>{i + 1}</p></td>
                            <td><p>{song.name}</p></td>
                            <td><p>{song.name}</p></td>
                            <td><p>{song.name} | {song.name}</p></td>
                            <td className="text-center">
                                <Dropdown drop="left">
                                    <Dropdown.Toggle className="btn btn-light rounded-0 shadow-none">
                                        Action
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="p-0 border-0 rounded-0 shadow">
                                        <Dropdown.Item href="#/action-1" className="p-2">
                                            <span className="ml-1">Edit</span>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1" className="p-2">
                                            <span className="ml-1">Delete</span>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SongTable;