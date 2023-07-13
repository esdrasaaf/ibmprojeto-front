import logo from "../assets/images/logo.png";
import logoJs from "../assets/images/logoJs.png";
import logoReact from "../assets/images/React-icon.svg";

export default function Header(){
    return (
        <header className="bg-grayLogo flex flex-col justify-center items-center w-screen p-10 h-fit gap-10">
            <ul className="flex gap-5">
                <li className="flex w-fit items-center gap-2">
                    <p className="text-xl font-bold font-inter text-tom1">JavaScript</p>
                    <img className="h-8" src={logoJs} alt="site logo"/>
                </li>

                <li className="flex w-fit items-center gap-2">
                    <p className="text-xl font-bold font-inter text-tom1">React</p>
                    <img className="h-8" src={logoReact} alt="site logo"/>
                </li>

                <li className="flex w-fi items-center gap-2">
                    <p className="text-xl font-bold font-inter text-tom1">Tailwind</p>
                    <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="site logo"/>
                </li>
            </ul>

            <img className="h-12" src={logo} alt="site logo"/>
        </header>
    );
}