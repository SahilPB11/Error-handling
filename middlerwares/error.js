const errorMiddleWare = (err, req, res, next) => {

    err.message = err.message || "Internal server eerrorr";
    err.statusCode = err.statusCode || 500;

    if(err.code === 11000){
    err.message = "Duplicate key error"
    err.statusCode = 400;
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

module.exports = errorMiddleWare;