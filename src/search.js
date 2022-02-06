/* trial folder */
/* search for an id */
/* makes more sense to use location, id unique */
const results = 
await app.Event.find({'_id':}$in: ids}});
/* unrelated */
app.Event.findOne({_id: ObjectId(req.params.Id)})
.then((eventItem)=>{
    if(!eventItem)=>{
        return (next(createError(404, "no event with that id"))
        )
    }
    results.send(eventItem);
});
/* sort by location and date..? */
/* const sortLocationAndDate = */
app.Event.sort({location: 1, eventDate: 1});