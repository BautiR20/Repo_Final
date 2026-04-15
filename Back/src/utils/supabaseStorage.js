import { supabase } from "../config/supabase.js";

export const uploadImageToSupabase = async (file, bucketName) => {
  try {
    
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, "_")}`;
    const filePath = fileName;

    const { data, error } = await supabase.storage
      .from(bucketName)
      
      
      
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false, 
      });

    if (error) {
      console.error("Error al subir a supabase", error.message);
      throw error;
    }

    
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error("Error detallado en uploadImageToSupabase:", error);
    throw new Error("Error al subir la imagen a supabase storage");
  }
};
