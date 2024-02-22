import React from 'react'
import './About.css'
import AboutSlider from '../components/AboutSlider'

function About() {
  return (
    <div className='about'>
      <h3 className='about-title'>O nama</h3>
      <div className='about-text'>
        <p>
        Cilj ove stranice je približiti svima zaljubljenicima u biljni i životinjski svijet ribolov kao sport i nas ribiče kao pojedince koji brinu i skrbe o vodi, njenim stanovnicima i njenom okruženju. Cilj nam je podjeliti neka svoja iskustva, ideje, izlete i ostale stvari s drugima koji slično nama razmišljaju u shvaćaju ribolov. 
        Mi smo ekipa zaljubljenika u ribolov, prirodu i dobro druženje koja prakticira i zagovara ulovi i pusti remiž ribolova na svim našim vodama i ribljim vrstama.
        <br></br>
        <br></br>
        Kao što smo gore ukratko opisali sad cemo malo opširnije pojasnit. Pravi smo ovisnici kojima je ribolov svakodnevno u glavi, bilo to planiranje kud sutradan ili za vikend ili za mjesec dva na vodu, ili kako prevarit onu ribu koja nam je neki dan pobjegla, kaj nam jos fali u prenatrpanom arsenalu pribora ili nam se javi kompić s fora pričom kaj mu se desilo na ribolovu, htjeli ili ne, ribolov je svakodnevno oko nas i u našim mislima. 
        <br></br>
        <br></br>
        Kaj se tiče di lovimo i kako, sve nam paše. Jezero, rijeka, potok, more, duboko, mutno, s obale, iz čamca, bliže, dalje, nama je svejedno, nije problem proć stotine kilometara, doć u drugu državu da vidjeli zaleđeno jezero, da i toga je bilo 🤣🤣🤣.
        Slobodan ribolov od sat dva prije ili poslije posla, vikendom jednom poluvrijeme (jutro-podne ili podne-vecer), kampanja od nekoliko dana, nocć na vodi ili dnevno natjecanje sve smo probali i sve nam se sviđa.  Nastojat ćemo detaljno pisat o svemu, koje ribe lovimo, lokacije, pribor, pristup ribolov kako bi vam što bolje prikazali sve što vam je potrebno za dobar i uspješan ribolov, inspiraciju za neku vlastitu novu ideju, lokaciju za vaš novi izlet, te čime i kako da probate lovit 
        <br></br>
        <br></br>
        Ako vam lajkate viđeno i prepoznajte našu ljubav i entuzijazam, te sami djelite iste osjećaje, sigurni smo da ce ova stranica bit vama po mjeri, ako pak ne, vjerujem da cete barem naći neke zanimljivosti i informacije koje će vama danas sutra dobro doći u vašim ribolovima, bistro!
        </p>
      </div>
      <div>
        <h3>galerija 'o nama'</h3>
        <AboutSlider/>
      </div>
    </div>
  )
}

export default About