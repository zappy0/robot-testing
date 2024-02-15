*** Settings ***
Library    Remote    http://localhost:${PORT}

*** Variables ***
${HOST}    localhost
${PORT}    8270

*** Test Cases ***

Test 1
    fillForm