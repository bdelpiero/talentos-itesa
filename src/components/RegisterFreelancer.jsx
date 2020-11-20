import React from "react";

function RegisterFreelancer({ handleChange, handleSubmit, data, bankData, step }) {
    return (
        <div style={{ maxWidth: '10rem' }}>

            <form onSubmit={handleSubmit} >
                {step == 1 &&
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
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
                                <option value="">Choose your type</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                            </select>
                        </label>
                    </div>
                }
                {step == 2 &&
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <label> Bank Name:
                            <input type="text" name='bankName' value={bankData.name} onChange={handleChange} />
                        </label>
                        <label> Account Name:
                            <input type="text" name='accountName' value={bankData.accountName} onChange={handleChange} />
                        </label>
                        <label> Alias:
                            <input type="text" name='alias' value={bankData.alias} onChange={handleChange} />
                        </label>
                        <label> CBU:
                            <input type="text" name='cbu' value={bankData.cbu} onChange={handleChange} />
                        </label>
                        <label> DNI:
                            <input type="text" name='dni' value={bankData.dni} onChange={handleChange} />
                        </label>
                    </div>
                }
                <br />
                <button type='submit'> Next Step</button>
            </form>
        </div>
    );
}

export default RegisterFreelancer;