import React, { useState } from 'react'
import image11 from "../../assets/images/11.webp";

function SelectImage() {
    const [image, setImage] = useState<any>([])

    let handalChange=(e:any)=>{
    //stap1
    //  console.log(e.target.files)
        let images = e.target.files;
            const reader = new FileReader();
            reader.onload =()=>{
                if(reader.readyState === 2){
                    debugger
                    setImage([...image, reader.result]);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
            debugger
   
        
        
    //stap2
    //maltiple images selected code 
        // const selectedFIles:any =[];
        // const targetFiles = e.target.files;
        // const targetFilesObject= [...targetFiles]
        // targetFilesObject.map((file)=>{
        //     return selectedFIles.push(URL.createObjectURL(file))
        // });
        // setImage([...image,selectedFIles]);
    }
    return (
        <>
           <div className="page">
               <div className="container">
                   {/* single image selected code  */}
                   {/* <div className="img-holder">
                       <img src={image} alt="" id="img" className="img" />
                   </div> */}

                {/* maltiple images selected code  */}
                   {
                        image.map((url:any,index:number)=>{
                            return (
                                <div className="col-sm-4" key={index}>
                                    <div className="card">
                                        <img src={url} />
                                    </div>
                                </div>
                            )
                        })
                    }
                   <input type="file" name="image-upload" id="input" multiple onChange={handalChange} />
                   <div className="label">
                       <label htmlFor="input"></label>
                   </div>
               </div>
           </div>
           
        </>
    )
}

export default SelectImage
