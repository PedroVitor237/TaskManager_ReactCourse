function Input(props) {
    return (
        <input 
            className="w-full p-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            {...props} // Spread the props to allow passing any additional attributes (like type, placeholder, value, onChange, etc.)
        />
    );
}

export default Input;