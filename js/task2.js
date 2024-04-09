function slugify(string) {
    let message = '';
    message  += 'https://' + string + '.com';
    return message;
}



console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));