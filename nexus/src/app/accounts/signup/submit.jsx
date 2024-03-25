export const SubmitForm = async (e, userName, eMail, passWord) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    
    

    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }),
});
    
    console.log('Form submitted:', formData);
    console.log({ response })
}