import ReactQuill from "react-quill";


export default function Editor({value,onChange}){
    

const modules={
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        
        ['blockquote', 'code-block'],               
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      
        [{ 'indent': '-1'}, { 'indent': '+1' }],          
        [{ 'direction': 'rtl' }],                         
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['link','image'],
      
        ['clean']                                         
      ]
};
    return(
        <div className="editor-container">
        <ReactQuill  
        value={value}
        onChange={onChange}
        modules={modules}/>

    </div>
    )
}