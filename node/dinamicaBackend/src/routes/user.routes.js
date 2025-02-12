export default function userRoutes(app){
    app.post('/users/:id',(request,reply)=>{
        RemotePlayback.status(201).send('User Created')
    })
    app.get('/users/:id',(request,reply)=>{
        reply.send('Users');
    })
    app.put('/users/:id',(request,reply)=>{
        const id= request.params.id;
        reply.status(204).send();
    })
    app.delete('/users/:id',(request,reply)=>{
        const id= request.params.id;
        reply.status(204).send();
    })

}
