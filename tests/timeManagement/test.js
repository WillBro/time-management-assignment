const chakram = require('chakram');
const randomstring = require("randomstring");
const expect = chakram.expect;

describe("Time Management", function () {
    var token, userId;
    var metPreferredWorkLoadProperty = "metPreferredWorkload";
    var preferredWorkLoad = 6;

    describe("User Creation", function () {
        var response, userToSignup, randomStringId, randomPassword;
        var meta;

        before("Initialise a new User for the tests", function () {
            randomStringId = randomstring.generate(7);
            randomPassword = randomstring.generate({
                charset: 'alphanumeric',
                length: 6
            });

            userToSignup = {
                "name": "William Test " + randomStringId,
                "login": "william.test." + randomStringId,
                "preferredWorkLoad": preferredWorkLoad,
                "password": randomPassword
            };

            return chakram.post("http://vcosta.com.br:3000/api/v1/user/signup", userToSignup)
                .then(function (apiResponse) {
                    response = apiResponse;
                    token = apiResponse.body.data.token;
                });
        });

        it("should return 201 on success", function () {
            expect(response).to.have.status(201);
        });

        it("should return token property on success", function () {
            expect(response.body.data).to.have.property('token');
        });

        it("should return a non empty token on success", function () {
            expect(response.body.data.token).to.be.not.empty;
        });

        it("should return a string token on success", function () {
            expect(response.body.data.token).to.be.a('string');
        });

        describe("Get User", function () {
            var response;

            before("Get new user information", function () {
                return chakram.get(" http://vcosta.com.br:3000/api/v1/user", {
                    "headers": {
                        "x-access-token": token
                    }
                })
                    .then(function (apiResponse) {
                        userId = apiResponse.body.data[0]._id;
                    });
            });

            it("Should create a user with role user", function () {
                // expect(response.body.data).to.be.json;
            })
        });
    });

    describe("Tasks", function () {

        describe("Add over preferred workload task", function () {
            var response;

            before("Add a new over preferred work load task", function () {
                var taskToCreate = {
                    date: "2018-01-01",
                    notes: "Over worked task notes",
                    user: userId,
                    workedHours: preferredWorkLoad + 2
                };

                return chakram
                    .post("http://vcosta.com.br:3000/api/v1/task", taskToCreate, {
                        "headers": {
                            "x-access-token": token
                        }
                    })
                    .then(function (apiResponse) {
                        response = apiResponse;
                    });
            });

            it("Should return 200 on success", function () {
                expect(response).to.have.status(200);
            });

            it("Should have no errors", function () {
                expect(response.body.data.errors).to.be.an("array").that.is.empty;
            });

        });

        describe("Add under workload task", function () {
            var response;

            before("Add a new under preferred work load task", function () {
                var taskToCreate = {
                    date: "2018-01-20",
                    notes: "Under worked task notes",
                    user: userId,
                    workedHours: preferredWorkLoad - 2
                };

                return chakram
                    .post("http://vcosta.com.br:3000/api/v1/task", taskToCreate, {
                        "headers": {
                            "x-access-token": token
                        }
                    })
                    .then(function (apiResponse) {
                        response = apiResponse;
                    });
            });

            it("Should return 200 on success", function () {
                expect(response).to.have.status(200);
            });
        });

        describe("Filter Tasks", function () {
            var response;

            before("Filter tasks by current user", function () {

                return chakram
                    .get("http://vcosta.com.br:3000/api/v1/task?user=" + userId, {
                        "headers": {
                            "x-access-token": token
                        }
                    })
                    .then(function (apiResponse) {
                        response = apiResponse;
                    });
            });

            it("Should return 200 on success", function () {
                expect(response).to.have.status(200);
            });

            it("Should return tasks as an array", function () {
                expect(response.body.data).to.be.an('array');
            });

            it("Should return two tasks", function () {
                expect(response.body.data).to.have.lengthOf(2);
            });
        });
    });
});