import './App.css';
import './components/id.css'
import './components/greetings.css'
import './components/creditCard.css'
import './components/driverCard.css'
import IDcard from './components/idCard';
import BoxColor from './components/boxColor'
import Rating from './components/rating'
import LikeButton from './components/likeButton';
import ClickablePic from './components/clickablePic';




const DriverCard = (props) => {
  return(
    <div className='DriverCard'>
      <img src={props.img} alt={props.name}/>
      <div className= 'driverInfo'>
        <h2>{props.name}</h2>
        <h2>{props.car.model} - {props.car.licensePlate}</h2>
      </div>
    </div>
  )
}
const Greetings =({lang, children}) => {
  let greeting=''
  if(lang === "de") {
    greeting="Hallo";
  } else if(lang === "fr") {
    greeting="Bonjour"
  } else if(lang === "en") {
    greeting="Hello"
  } else if(lang === "es") {
    greeting="Hola"
  }
  
  return(
    <div>
    <div className="greetings">
    <p>{greeting} {children}</p>
    </div>
    </div>
  )
}
const RandomNumber =({min, max}) => {
  let numberRan = Math.floor(Math.random() *max) +min
  return(
    <div className="greetings">
      <p>Random value between {min} and {max} => {numberRan}</p>
    </div>
  )
  
}

const CreditCard = (props) => {
  let cardType = {};
  if(props.type === 'Visa') {
    cardType = '../public/visa.png';
  } if(props.type === 'Master Card') {
    cardType = '../public/MC.png';
  }
  return (
    <div className="creditCard" style = {{backgroundColor: props.bgColor, color:props.color}}>
      <div className="card-type">
        <img src={cardType} alt="credit card"/>
        <p>0000 0000 0000 {props.number.slice(12)}</p>
        <p>Expires {props.expirationMonth}{props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>

      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <h1 className="iDCard">IDcard</h1>
      <IDcard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IDcard
      lastName="Doe"
      firstName="John"
      gender="male"
      height="1.78m"
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de" child="Ludwig">Lugwig</Greetings>
      <Greetings lang="fr" child="François">François</Greetings>
      <h1>Random Number</h1>
      <RandomNumber min={1} max={6}/>
      <RandomNumber min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
    
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
    
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
  name="Travis Kalanick"
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
<LikeButton/>

    
    <ClickablePic
  img='./assets/images/maxence.png'
  imgClicked='./assets/images/maxence-glasses.png'
/>
</div>
  );
}

export default App;
