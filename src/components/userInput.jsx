export default function Input({label, value, onChange, placeholder, type="text"}){
    return(
        <div>
         <input
        type={type}
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
      />
      </div>
    )
    
    
}