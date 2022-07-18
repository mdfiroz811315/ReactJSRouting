import Footer from "./Footer";
function Contact() {
    return (
        <div>
            <h2> Contact Form</h2>
           <form>
                <label for="fname">First name:</label><br></br>
                <input type="text" id="fname" name="fname" value="John" /><br></br>
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname" value="Doe" /><br></br><br></br>
                <input type="submit" value="Submit" />
            </form> 
        </div>
  )
  }
  
  export default Contact;