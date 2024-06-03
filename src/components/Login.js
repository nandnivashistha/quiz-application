import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [code, setCode] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication logic here
        if (code === 'admin') {
            history.push('/admin');
        } else {
            history.push('/quiz');
        }
    };

    return (
        <div className="mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter Access Code</label>
                    <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
