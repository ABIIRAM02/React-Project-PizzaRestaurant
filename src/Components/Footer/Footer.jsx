import bg from '../../images/bg2.jpg'
import './Footer.css'

function Footer()
{
    return(
        <section className="footer" id='footer'>

        <div className='block-1'>
            <img src={bg} alt="" />
        </div>
        <div className='block-2'>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, consectetur.</h2>
        </div>
        <div className='block-3'>
            <h5>find our restaurants</h5>
            <p>Shop No 645, 1st Floor, 24th Cross, 24th Main Rd, near BDA Complex · 1800 208 1234    
            Kerbside pickup·
            </p>
            <p>New No 36 Old No 9, 5th block, 11th Main Rd · 1800 208 1234
            Takeaway·</p>
            <p>Ground Floor, Commercial Building at site No. 20, (Old 1636 7th Cross Road, BSK 1st Stage · 1800 208 1234
           
            Kerbside pickup·</p>
        </div>
        <div className='block-4'>
            <h5>working hours </h5>
            <p>Open ⋅ Closes 11 pm
            Dine-in·</p>
        </div>

        </section>
    )
}

export default Footer