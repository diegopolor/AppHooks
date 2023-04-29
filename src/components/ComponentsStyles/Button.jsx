export const Button = ({ onClick, children }) => {//eslint-disable-line
    return (  
        <button 
            className="flex bg-teal-600 text-white p-1 rounded-md" 
            onClick={onClick}
        >
            { children }
        </button>
    );
}
 
