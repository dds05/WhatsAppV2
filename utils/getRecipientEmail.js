
const getRecipientEmail=(users,userLoggedIn)=>users?.filter((usertofilter)=>usertofilter!==userLoggedIn?.email)[0];


export default getRecipientEmail;