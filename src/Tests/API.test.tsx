import API from '../API';

describe("parse embed",()=>{
    test("watch link",()=>{
        expect(API.parseEmbedLink("https://www.youtube.com/watch?v=1wGOHbcQKIc")).toEqual("https://www.youtube.com/embed/1wGOHbcQKIc");
    });
    test("playlist link",()=>{
        expect(API.parseEmbedLink("https://www.youtube.com/watch?v=1wGOHbcQKIc&list=PL0nhBlgFkftzaBqgQjvo-1z81P1vkBJYN&index=1")).toEqual("https://www.youtube.com/embed/1wGOHbcQKIc");
    });
});