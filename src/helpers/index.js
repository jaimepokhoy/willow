import random from 'lodash/random';

export function getRandomPerson(people, hand, target) {
    const randomPerson = Object.assign({}, people[random(people.length)], {
        clicked: false
    });
    if ([...hand, target].find(person => person.id === randomPerson.id)) {
        return getRandomPerson(people, hand, target);
    } else {
        return randomPerson;
    }
}