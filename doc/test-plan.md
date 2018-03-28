# Time Management Application Master Test Plan
> Visibility is king and effort should not be hidden. Tracking time to provide an overview of hours worked over an ideal hours per day for both the employee and management.

## Document Usage Guide

##### Introduction

End-to-end functional testing of the applications REST API using a day of test resources.

##### Responsibilities

* William Brown - Quality Assurance
* Rizwan - Test Lead and Review moderator

##### Roles
> Give a low down of who is doing what with the project *outside* the scope of testing. Name names. List titles and departments, maybe even contact data.

##### Philosophy
Fail fast - provide the simplest solution which provides the most coverage.

##### Assumptions
* That the test environment will be accessible.

##### Staffing and training needs
* Javascript
* Node.js
* Chai/Mocha

##### Deliverables

* Test Case Report
* Bug Report
* Improvements and observations

##### Environmental needs
> Staging environment hosting application

##### Testing tasks
> Outline what functional tasks are required with exception to the actual testing. You may want to consider equipment setup along with any administrative tasks.

##### Suspension criteria and resumption requirements
> Should the application throw a 500 Server Error the testing will be suspended until a root cause has been determined.

##### Item pass/fail criteria
> State the acceptable pass / fail criteria. This can be some general criteria or at individual test case level.

##### Approach
> Outline the overall test strategy for this plan, identifying the test process and rules that will be followed. You may also want to include any information about tools, software, or hardware that will be used.

##### Test items

* User Management
* Task Management
* Filtering
* Exporting

##### Features to be tested

* User Registration
* User Login
* Task Creation
* Working hours per day feedback

##### Features not to be tested
> List the features / requirements that will not be tested and are outside of the scope of this test plan.

##### Resources
Project setup information can be found within README.md in the project root.

##### Risks and contingencies
* One potential risk is that the test environment is not available. A potential option for mitigating this risk would be to provide a self-contained dockerized version to be run locally.

##### Document Maintenance

As the documentation is provided aside the test tooling it shall be managed within this repository.
