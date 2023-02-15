import './Button.css';

export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return <button className="button-navigation" onClick={handleClick}>Click me</button>;
  }