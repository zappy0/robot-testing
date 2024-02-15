*** Settings ***
Library    Remote    http://localhost:${PORT}
Library    org.zappy.keywords

*** Variables ***
${HOST}    localhost
${PORT}    8270

*** Test Cases ***

Test 0
    ${res}=  sum  ${1}  ${2}
    Log To Console    ${res}

Test 1
    ${price}=  getDetails
    ${res}=  sum  ${price}  ${2}
    Log To Console    ${res}