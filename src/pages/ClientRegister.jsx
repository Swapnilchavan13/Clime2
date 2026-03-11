import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ClientRegister () {

const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
const [contactNumber,setContactNumber]=useState('');
const [email,setEmail]=useState('');
const [organization,setOrganization]=useState('');
const [sector,setSector]=useState('');
const [website,setWebsite]=useState('');
const [plan,setPlan]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [logoImg,setLogoImg]=useState(null);
const [logoImgPreview,setLogoImgPreview]=useState(null);
const [acceptTerms,setAcceptTerms]=useState(false);

const navigate = useNavigate();

const handleSubmit = async(e)=>{
e.preventDefault();

if(password!==confirmPassword){
alert("Passwords do not match!");
return;
}

const formData=new FormData();

formData.append('firstName',firstName);
formData.append('lastName',lastName);
formData.append('contactNumber',contactNumber);
formData.append('email',email);
formData.append('organization',organization);
formData.append('sector',sector);
formData.append('website',website);
formData.append('plan',plan);
formData.append('password',password);
formData.append('logoimg',logoImg);

const response=await fetch('https://backend.climescore.com/addclient',{
method:'POST',
body:formData
});

if(response.ok){
alert("Registered successfully!");
navigate('/client/login');
}else{
alert("Registration failed.");
}
}

const handleLogoChange=(e)=>{
const file=e.target.files[0];
setLogoImg(file);

if(file){
const reader=new FileReader();
reader.onloadend=()=>setLogoImgPreview(reader.result);
reader.readAsDataURL(file);
}
}

const containerStyle={
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"40px",
background:"#f4f7f5",
minHeight:"100vh",
fontFamily:"Arial"
}

const cardStyle={
width:"520px",
background:"#fff",
padding:"35px",
borderRadius:"10px",
border:"2px solid #2f855a",
boxShadow:"0 8px 20px rgba(0,0,0,0.08)"
}

const inputStyle={
width:"100%",
padding:"10px",
marginTop:"5px",
marginBottom:"15px",
border:"1px solid #ccc",
borderRadius:"6px",
fontSize:"14px"
}

const labelStyle={
fontWeight:"600",
fontSize:"14px"
}

const planBox={
flex:1,
border:"1px solid #ccc",
padding:"10px",
borderRadius:"6px",
cursor:"pointer",
display:"flex",
alignItems:"center",
gap:"8px"
}

const buttonStyle={
width:"100%",
marginTop:"20px",
padding:"12px",
background: acceptTerms ? "#2f855a" : "#b5b5b5",
color:"white",
border:"none",
borderRadius:"6px",
fontSize:"16px",
fontWeight:"600",
cursor: acceptTerms ? "pointer":"not-allowed"
}

return(

<div style={containerStyle}>

<div style={cardStyle}>

<div style={{textAlign:"center",marginBottom:"10px"}}>
<img src="/ClimeScore.png" alt="logo" style={{height:"45px"}}/>
<h2 style={{margin:"5px 0",color:"#2f855a"}}>User Registration Page</h2>
</div>

<p style={{fontSize:"13px",color:"#555",textAlign:"center",marginBottom:"20px"}}>
Contact Number will be used as your login ID.
</p>

<form onSubmit={handleSubmit}>

<label style={labelStyle}>First Name</label>
<input style={inputStyle} type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required/>

<label style={labelStyle}>Last Name</label>
<input style={inputStyle} type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>

<label style={labelStyle}>Contact Number</label>
<input style={inputStyle} type="tel" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} required/>

<label style={labelStyle}>Email</label>
<input style={inputStyle} type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>

<label style={labelStyle}>Organization Name</label>
<input style={inputStyle} type="text" value={organization} onChange={(e)=>setOrganization(e.target.value)} required/>

<label style={labelStyle}>Website Address</label>
<input style={inputStyle} type="url" value={website} onChange={(e)=>setWebsite(e.target.value)} required/>

<label style={labelStyle}>Sector</label>
<select style={inputStyle} value={sector} onChange={(e)=>setSector(e.target.value)} required>
<option value="">Select Sector</option>
<option>IT</option>
<option>Manufacturing</option>
<option>Healthcare</option>
<option>Finance</option>
<option>Education</option>
<option>Other</option>
</select>

<label style={labelStyle}>Select Plan</label>

<div style={{display:"flex",gap:"10px",marginBottom:"15px"}}>

<label style={planBox}>
<input type="radio" name="plan" value="Basic" onChange={(e)=>setPlan(e.target.value)} required/>
Basic
</label>

<label style={planBox}>
<input type="radio" name="plan" value="Professional" onChange={(e)=>setPlan(e.target.value)}/>
Professional
</label>

<label style={planBox}>
<input type="radio" name="plan" value="Enterprise" onChange={(e)=>setPlan(e.target.value)}/>
Enterprise
</label>

</div>

<label style={labelStyle}>Password</label>
<input style={inputStyle} type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

<label style={labelStyle}>Confirm Password</label>
<input style={inputStyle} type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>

<label style={labelStyle}>Upload Logo</label>
<input style={{marginBottom:"15px"}} type="file" onChange={handleLogoChange}/>

{logoImgPreview && (
<img src={logoImgPreview} alt="preview" style={{width:"100px",borderRadius:"6px",marginBottom:"10px"}}/>
)}

<div style={{display:"flex",gap:"8px",fontSize:"13px",marginTop:"10px"}}>

<input type="checkbox" checked={acceptTerms} onChange={(e)=>setAcceptTerms(e.target.checked)}/>

<span>
I accept the terms and conditions as per the{" "}
<a href="/agreement" target="_blank" rel="noopener noreferrer" style={{color:"#2f855a",fontWeight:"600"}}>
Agreement for use of ClimeScore platform
</a>
</span>

</div>

<button disabled={!acceptTerms} style={buttonStyle}>
Register
</button>

</form>

</div>

</div>

)

};