const Alumno = require('../model/Alumno')


module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos})
    })
}


module.exports.crear = (req, res)=>{
 
    const alumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad
    })
    alumno.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Alumno'
            })
        }
        res.redirect('/')
    })
}


module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const edad = req.body.edad_editar
    Alumno.findByIdAndUpdate(id, {nombre, edad}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}


module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Alumno.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')
    })
}