import React from "react";

function RegisterFreelancer({ handleChange, data /* handleSubmit */ }) {
    return (
        <div>
            <form onSubmit={/* handleSubmit */}>
                <label> Name:
                    <input type="text" name='name' value={data.name} onChange={handleChange} />
                </label>
                <label> Last Name:
                    <input type="text" name='lastName' value={data.lastName} onChange={handleChange} />
                </label>
                <label> Email:
                    <input type="email" name='email' value={data.email} onChange={handleChange} />
                </label>
                <label> Password:
                    <input type="password" name='password' value={data.password} onChange={handleChange} />
                </label>
                <label> Type of freelancer:
                    <select name='freelancerType' value={data.freelancerType} onChange={handleChange}>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                    </select>
                </label>
                <button type='submit'> Next Step</button>
            </form>
        </div>
    );
}

export default RegisterFreelancer;