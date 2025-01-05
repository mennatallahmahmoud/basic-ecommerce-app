import Image1 from './Images/ecommerce (1).jfif'
import './About.css';

function About() {
    return (
        <>
        <div className='text-center container about-container'>
            <h1 className='pb-5 text-center mx-auto'>About Us</h1>
            <img src={Image1} alt='about'/>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit sapien eu ipsum viverra, ut bibendum dui egestas. Morbi finibus eget nunc in ultricies. Cras sollicitudin laoreet justo, ac rutrum arcu consequat et. Nam finibus augue vitae lobortis tincidunt. Vestibulum nulla eros, interdum eu eleifend et, viverra non risus. Donec dictum sem ut lectus auctor rhoncus. Fusce vulputate arcu velit, at dictum turpis rhoncus at. Quisque nec ex id lectus congue feugiat. Proin faucibus et enim nec ornare. Fusce tempus lectus id porttitor rutrum. Quisque porta mi sed venenatis tempus. Nam eu nibh sodales, egestas nisi in, maximus neque. In faucibus congue sem a sagittis. Pellentesque quis interdum ipsum. Praesent nec nisi vel velit aliquam porta.
            </p>
        </div>
        </>
    )
}

export default About;