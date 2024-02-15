*** Settings ***
Library    Remote    http://localhost:${PORT}
Library    org.zappy.keywords

*** Variables ***
${HOST}    localhost
${PORT}    8270

*** Test Cases ***

Test 0
    ${res} =  sum  ${1}  ${2}

Test 1
    fillForm