import './Navbar.css'
/* import Logo from '/public/Images/Logo.png'; */
import Button from '../Buttons/Button';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = (props)=>{

const funcionClick = ()=>{
    alert ("Se hizo un click");
}

    return(
    <div className='divConteiner'> 
        <nav className='containerNav'> 
          {/* <Logo /> */}  
            <h1 style={{color: props.color}}>Navbar de eCommerce</h1>
                    <section> 
                        <Button colorText='blue' handleOnClick={funcionClick} >INICIO</Button>
                        <Button  colorText='blue'>PRODUCTOS</Button> 
                    </section>
            <br></br>
                    <box-icon name='menu'></box-icon>
            <CartWidget />
        </nav>
         
             
            
    </div>
    )       
};
export default Navbar