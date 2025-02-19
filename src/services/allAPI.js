import commonAPI from "./commonAPI";

export const uploadVideo=async(requestBody)=>{
    
  return await commonAPI("post","/videos",requestBody)

}
// export default uploadVideo

export const getAllVideo=async(requestBody)=>{
    
  return await commonAPI("get","/videos",requestBody)

}

export const addHistory=async(videoDetails)=>{
  return await commonAPI("post","/history",videoDetails)
}

export const getHistoryDetails= async()=>{
  return await commonAPI("get","/history","")
}

export const deleteHistory=async(id)=>{
  return await commonAPI("delete",`/history/${id}`,{})
}
export const deleteVideo=async(id)=>{
  return await commonAPI("delete",`/videos/${id}`,{})
}

export const createCategory =async(categoryDetails)=>{
  return await commonAPI("post","/categories",categoryDetails)

}

export const getCategory=async()=>{
  return await commonAPI("get","/categories","")
}

export const deleteCategory=async(id)=>{
  return await commonAPI("delete",  `/categories/${id}`,{})
}