export const Button = ({ onClick, children } = props) => {//eslint-disable-line
    return (  
        <button 
            className="flex bg-teal-600 mx-1 text-white p-1 rounded-md" 
            onClick={onClick}
        >
            { children }
        </button>
    );
}
 
