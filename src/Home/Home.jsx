import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer/Footer";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
// eslint-disable-next-line no-unused-vars
import { Cart } from "../Cartitems/Cart";
import { useCart } from "../Cartitems/Cart";
const Home = () => {
    const { addToCart, showNotification } = useCart();
    // style for the image slider and texts
    const Imag = {
        width: '100%',
         height: '80vh',
         objectFit: 'fill'
     }
     const ImgTexts = {
         color: '#453437d7',
         fontWeight: '900',
         fontSize: '1rem',
         marginBottom: '20px'
     } 

     // style for the products images
     
     const Samples = {
        display: 'flex',
        justifyContent: 'center'
    
     }
     const productsImages = {
        border: '1px solid grey',
        borderRadius: '4px',
        width: '150px',
        height: '33vh',
        
     }

     //style for the info
     const info = {
        textAlign: 'center'
     }
     const notification = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(233, 230, 230)',
        padding: '20px'
     }
     //Xpressionstoree/shop with card
     const shop = {
        textAlign:'center',
         backgroundColor:'#fc00ff', 
         width:'150px',
          margin:'auto auto', 
         display:'block',
         padding: '6px',
         borderRadius: '3px',
         marginBottom: '4px'
     }

     //image lists for samples
     const list ={
        display: 'flex',
        gap: '8px'
     }

    
    // function for the image slider
    const [currentImage, setCurrent] = useState(0); // products
    const [run, setRun] = useState(0); // reviews

//products
   const images = [{image: '/Xpressionstoree/blue cargo pant.JPG', text: 'Zipper Leather Pant'}, 
    {image: '/Xpressionstoree/jeans multi pocket.JPG', text: 'Chrome Combat'}, 
    {image: '/Xpressionstoree/jeans up and down.JPG', text: 'High Quality Double '}, 
    {image: '/Xpressionstoree/hf.JPG', text: 'High Fashion '}, 
    {image: '/Xpressionstoree/swag.JPG', text: 'Double Stitched Chrome Pant'}, 
    {image: '/Xpressionstoree/up and down.JPG', text: 'Quality Highfashion Two Pieces'} 
];

//reviews
const clients = [{pic: '/Xpressionstoree/Canadian.JPG', text: 'First time patronizing this brand and I dont regret it' },
{pic: '/Xpressionstoree/Baddie 2.JPG', text: 'I got exactly what I ordered'},
{pic: '/Xpressionstoree/baddie.JPG', text: 'I love this brand, very friendly'}
];

useEffect (() => {
    const interval = setInterval(() => {
        setCurrent((c) => (c + 1) % images.length);
        
    }, 3000);

    return () => {
        clearInterval(interval);
    };
   }, [images.length]);
   

   const products = [
    { id: 1,
     image: '/Xpressionstoree/leather skirt.JPG',
     name:'Leather Skirt', 
     desc:'High quality leather skirt up and down. Best suitable for all occassions such as: dinner date, house party, etc', 
     price: '$200'
    },
    { id: 2, 
     image: '/Xpressionstoree/jeans jacket.JPG', 
     name:'Jeans Jacket',
     desc:'Jeans jacket, also available in black color... Get the best out of Xpression wears in this nice jacket', 
     price: '$600'
    },
    { id: 3, 
      image: '/Xpressionstoree/Blue hoodie.JPG',  
      name:'Blue Hoodie', 
      desc:'Feeling cold? Try out this luxury high quality hoodie for all cold season; keeps you warm and cozy', 
      price: '$250'
    },
    { id: 4, 
      image: '/Xpressionstoree/mickey mouse.JPG', 
      name:'Vintage', 
      desc: 'Vintage shirt for your casual outing', 
      price: '$200'
    },
    { id: 5, 
      image: '/Xpressionstoree/short.JPG',  
      name:'Chrombat short', 
      desc: 'Our chrombat pants don\'t just come in long pairs but also in short design ', 
      price: '$600'
    },
    { id: 6, 
      image: '/Xpressionstoree/brown jacket.JPG', 
      name:'Brown Jacket', 
      desc: 'You love brown? then this is for you... made out of the best jeans materials in the world', 
      price: '$300'
    }
   ];

    return (
        
        <>
            <div className="slider">
                <img src={images[currentImage].image}  style={Imag}/>
                <p className="texts" style={ImgTexts}> {images[currentImage].text} </p>

    </div>
    {showNotification && <div className="notification">Item added to cart successfully!</div>}
    <div className="samples" style={Samples}>
            <div className="items">
                <ul style={list}> 
                    {products.map(product => (    
         <li key={product.id}> <br /> <br />
         
        <img src={product.image} style={productsImages} />
        <p style={{fontSize: '13.8px'}}>{product.name}</p>
        <p className="price">{product.price}</p>
        <AddToCartButton onClick={() => addToCart(product.image)} > 
           Add to cart
        </AddToCartButton>
        </li>
    ))}
    </ul> 
        <br /> 
            </div>
            </div>  

          <br /> <br /> <br /> <br />

          <section className="new-products">
            <div className="newProducts">
            <li>
            <h4>Popular Products</h4>
            <br /> 
                <Link to="/Xpressionstoree/shop" className='link'> <img src="/Xpressionstoree/hf.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Fashion</p> 
                <p className="price">$9000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/hf.JPG")} >Add to cart</AddToCartButton>
            </li>
            <li>
            <br /> <br />
                <Link to="/Xpressionstoree/shop" className='link'> <img src="/Xpressionstoree/green joggers.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Joggers</p>
                <p className="price">$6000</p>
               <AddToCartButton onClick={() => addToCart("/Xpressionstoree/green joggers.JPG")} >Add to cart</AddToCartButton>
            </li>
            <li>
            <br /> <br />
                <Link to="/Xpressionstoree/shop" className='link'> <img src="/Xpressionstoree/armless.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Armless</p>
                <p className="price">$2000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/armless.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
            <br /> <br />
                <Link to="/Xpressionstoree/shop" className='link'> <img src="/Xpressionstoree/white vintage.JPG" style={productsImages}></img>  </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Vintage</p>
                <p className="price">$1000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/white vintage.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/jeans up and down.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper jeans</p>
                <p className="price">$3000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/jeans up and down.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/TTIO8506.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/TTIO8506.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/PGGY2062.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}> Chrome Combat Short</p>
                <p className="price">$4000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/PGGY2062.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/LXLK6631.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>High Quality Stylish</p>
                <p className="price">$3000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/LXLK6631.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/KVJJ2447.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Zipper Joggers</p>
                <p className="price">$8000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/KVJJ2447.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/women jeans.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Chrome Combat jeans</p>
                <p className="price">$2000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/women jeans.JPG")} > Add to cart</AddToCartButton>
            </li>
            <li>
                <br/> <br />
                <Link to="/Xpressionstoree/shop" className="link "> <img src="/Xpressionstoree/black armless.JPG" style={productsImages}></img> </Link>
                <p className="productName" style={{fontSize: '13.8px'}}>Two Piece</p>
                <p className="price">$9000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/black armless.JPG")} > Add to cart</AddToCartButton>
            </li>
            </div>
            </section>  <br /> <br />   <br /> 


            <section className="hoodiesCollection">
            <div className='hoodies'> <br />
            <h4>Top Sweater Collection</h4> <br /> <br /> 
                <div className="collections">
            <li>
             <img src="/Xpressionstoree/crochet sweater.WEBP" className='sweater' style={productsImages}></img> 
            <p className="productName" style={{fontSize: '13px'}}>Crochet Sweater </p>
            <p className="productName" style={{fontSize: '13px'}}>Crochet sweater collection just for you</p>
                <Link to="/Xpressionstoree/shop" className="link ">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                <li>
                 <img src="/Xpressionstoree/Blue hoodie.JPG" className="sweater" style={productsImages}></img>  
                <p className="productName" style={{fontSize: '13px'}}>Blue Hoodie</p>
                <p className="productName" style={{fontSize: '13px'}}>Blue hoodie collection, peerfect for gifting </p>
                <Link to="/Xpressionstoree/shop" className="link">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                <li>
                 <img src="/Xpressionstoree/green sweater.JPG" className="sweater" style={productsImages}></img> 
                <p className="productName" style={{fontSize: '13'}}>Green Sweater</p>
                <p className="productName" style={{fontSize: '13px'}}>Lovely winter collection just for you </p>
                <Link to="/Xpressionstoree/shop" className="link ">see more <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
                </li>
                </div>
            </div> 
            </section><br /> <br />

            <section className="Combat-Pants">
            <h4 style={{textAlign: 'center'}}>Combat Pants Collection</h4> <br /> <br />
            <div className="combatPants" style={Samples}>
                <div className="pants">
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/blue cargo pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Blue Combat Pant</p>
                <p className="price">$700</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/blue cargo pant.JPG")} > Add to cart </AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/brown cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Cargo Pant</p>
                <p className="price">$6000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/brown cargo.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/quality combat pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Luxury Cobant Pant</p>
                <p className="price">$3000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/quality combat pant.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/slim fit cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Perfect Fit</p>
                <p className="price">$1300</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/slim fit cargo.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/white rope cargo.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>High Fashion</p>
                <p className="price">$2500</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/white rope cargo.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/white jorgas.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Jorgas</p>
                <p className="price">$500</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/white jorgas.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/swag.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Two Piece</p>
                <p className="price">$800</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/swag.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/ash joggers.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Zip UP Pant</p>
                <p className="price">$1000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/ash joggers.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li>
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/blue cargo pant.JPG" className="sweater" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Cargo Pant</p>
                <p className="price">$1200</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/blue cargo pant.JPG")} > Add to cart</AddToCartButton>
                </li>
                </div>
            </div>
            </section> <br /> <br />

            <section className="shoes-Collection">
                <div className="newProducts">
                    <li>
                    <h4 >Shoes Collection</h4> <br /> 
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/High fashion mixed loafers.JPG"  style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Mixed Loafers</p>
                <p className="price">$600</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/High fashion mixed loafers.JPG")} > Add to cart</AddToCartButton>
                </li> 
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/female.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Jeans Made sandals</p>
                <p className="price">$100</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/female.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/Derby.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Derby</p>
                <p className="price">$3000</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/Derby.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/Loafers.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Loafers</p>
                <p className="price">$100</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/Loafers.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/oxford sshoe.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>All Black Oxford</p>
                <p className="price">$2500</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/oxford sshoe.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/pink crocs.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Crocs</p>
                <p className="price">$800</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/pink crocs.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/loaffers.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Loafers</p>
                <p className="price">$600</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/loaffers.JPG")} > Add to cart</AddToCartButton>
                </li>
                <li> <br /> <br />
                <Link to="/Xpressionstoree/shop" className="link ">
                 <img src="/Xpressionstoree/monk strap.JPG" style={productsImages}></img> 
                 </Link>
                <p className="productName" style={{fontSize: '13'}}>Monk Strap</p>
                <p className="price">$400</p>
                <AddToCartButton onClick={() => addToCart("/Xpressionstoree/monk strap.JPG")} > Add to cart</AddToCartButton>
                </li>
                </div>
            </section>

            <section className="stylying">
                <div className="beauty">
                    <h4 >Come And Let Us Style You</h4>
                    <p>get in touch with us today</p>
                    <p>explore our shop</p> <br />
                    <Link to="/Xpressionstoree/shop" className="link shopLink">shop</Link>
                </div>
            </section> <br /> <br />

            <section className="Reviews">
                <div className="review">
                    <p style={{textAlign: 'center', fontSize: '0.95rem', fontWeight: 'bolder'}}>Check Out What Our Top Customers And Friends Say About Us</p> <br />
                    <div className="rev">
                    <img src={clients[run].pic} className="Cl-pics"/>
                    <p className="texts" style={ImgTexts}> {clients[run].text} </p>
                    <button onClick={() => setRun((t) => (t - 1 + clients.length) % clients.length )} className="buttonLeft"> <FontAwesomeIcon icon={faArrowAltCircleLeft} /> </button>
                    <button onClick={() => setRun((t) => (t + 1) % clients.length )} className="buttonRight"> <FontAwesomeIcon icon={faArrowAltCircleRight } /> </button>
                    </div>
                </div> 
            </section> <br /> <br />

            <section className="ask">
                <div className="info" style={info}>
                    <p style={{fontFamily:'monospace', fontSize:'1.3rem', marginBottom:'12px'}}>HAVE ANY QUESTIONS YOU WANT TO ASK US?</p> 
                    <Link to='/faq' className="link">Read our frequently asked questions here <FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                </div>
            </section> <br />

            <section className="getNotified" style={notification}>
                <div style={{width: '300px', margin:'20px', textAlign:'center'}} >
                    <p style={{fontSize:'1.3rem', fontFamily:'cursive', marginBottom:'10px'}}>Want To Receive Notification In Real Time For Our Latest Products?</p>
                    <p style={{fontSize:'0.85rem', marginBottom:'10px'}}>Get Instant Alert And Be The First Person To Know When New Items Drop</p>
                    <form style={{display:'flex', justifyContent:'space-evenly'}}>
                        <input type="email" placeholder="enter email" style={{height:'30px', borderRadius:'3px'}}/>
                        <input type="submit" style={{backgroundColor:'black', color:'white', width:'100px'}}/>
                    </form>
                </div>
            </section>

            <section className="banking">
        <div className="card">
            <h3 className="bank">UBA</h3>
            <div className="details">
            <div className="side">
              <img src='/Xpressionstoree/chip.JPG' style={{width:'30px', height:'auto'}} />
              <h5 className="card-numbers">0000 0000 0000 </h5>
              <span className="validity">Valid</span>  <span className="validity">10/40</span> <br />
              <span className="name validity">Jhon Doe</span>
            </div>
              <span className="design orange"></span> <span className="design red"></span>
            </div>
        </div>
        <p style={shop}><Link to='/Xpressionstoree/shop' className="link">Shop With Your Card </Link> </p>
            </section>
            <Footer/>
        </>
        
    )
}
export default Home;