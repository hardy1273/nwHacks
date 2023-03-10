const UserService = require("../user");


const addEvent =
  (Event) =>
  async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const eventType = req.body.eventType;
    const link = req.body.link;
    const email = req.body.email;


    const event = new Event({
      name,
      description,
      eventType,
      link
    });

    const currentUser = await UserService.getUserByEmail({
      email,
    });

  

    const savedEvent = await event.save();

    currentUser.addedEvent = currentUser.addedEvent.concat(savedEvent._id);

    await currentUser.save();



    return res.status(201).send("ok");
    // console.log(x.body.name)

  };

const getEvents = (Event) => async (req, res) => {
  const events = await Event.find({});

  return res.json(events);
};

const getEventsByEventType =
  (Event) =>
  async (req, res) => {
    const eventType = req.body.eventType;
    const events = await Event.find({
      eventType,
    });

    return res.json(events);
  };

  const getEventByName =
    (Event) =>
    async (req, res) => {
      const name = req.body.name;
      const events = await Event.find({
        name: {"$regex": name },
      });
      return res.json(events);

    }

module.exports = (Event) => {
  return {
    addEvent: addEvent(Event),
    getEvents: getEvents(Event),
    getEventsByEventType: getEventsByEventType(Event),
    getEventByName: getEventByName(Event),
  };
};