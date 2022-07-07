import React, { useState } from 'react'

function SelectImage() {
    const [image, setImage] = useState<any>([])

    let handalChange=(e:any)=>{
        Array.from(e.target.files).forEach((file:any) => {
            const reader = new FileReader();
            reader.onload =()=>{
                    setImage( (prevState:any) => [...prevState, reader.result]);
            }
            reader.readAsDataURL(file);
        });
    }
    return (
        <>
           <div className="page">
               <div className="container">
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
