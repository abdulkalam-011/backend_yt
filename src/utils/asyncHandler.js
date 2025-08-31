

const asyncHandler = (func) => (req, res, next) => {
    try {
      func(req, res, next);
    }catch(err){
      console.log("async Handle Error :" , err)
      next(err);
    }
} 

export {asyncHandler};