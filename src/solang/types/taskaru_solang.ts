export type TaskaruSolang = {
  "version": "0.3.1",
  "name": "taskaru_solang",
  "instructions": [
    {
      "name": "accountData",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "accountData_returns"
      }
    },
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "payer",
          "type": "bytes"
        },
        {
          "name": "bump",
          "type": {
            "array": [
              "u8",
              1
            ]
          }
        },
        {
          "name": "user",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setIsAcceptedTask",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "value",
          "type": "bool"
        }
      ]
    },
    {
      "name": "getTasksCompleted",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "getIsAcceptedTask",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": "bool"
    }
  ],
  "types": [
    {
      "name": "accountData_returns",
      "docs": [
        "Data structure to hold the multiple returns of function accountData"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "tasksCompleted",
            "type": "u64"
          },
          {
            "name": "isAcceptedTask",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "7C8HShAB3k6XuZ8Yo7krx4VdmBJXYW1CXecEY2jrfVfP"
  }
};

export const IDL: TaskaruSolang = {
  "version": "0.3.1",
  "name": "taskaru_solang",
  "instructions": [
    {
      "name": "accountData",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "accountData_returns"
      }
    },
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "payer",
          "type": "bytes"
        },
        {
          "name": "bump",
          "type": {
            "array": [
              "u8",
              1
            ]
          }
        },
        {
          "name": "user",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "setIsAcceptedTask",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "value",
          "type": "bool"
        }
      ]
    },
    {
      "name": "getTasksCompleted",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "getIsAcceptedTask",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [],
      "returns": "bool"
    }
  ],
  "types": [
    {
      "name": "accountData_returns",
      "docs": [
        "Data structure to hold the multiple returns of function accountData"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "tasksCompleted",
            "type": "u64"
          },
          {
            "name": "isAcceptedTask",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": {
              "array": [
                "u8",
                1
              ]
            }
          }
        ]
      }
    }
  ],
  "metadata": {
    "address": "7C8HShAB3k6XuZ8Yo7krx4VdmBJXYW1CXecEY2jrfVfP"
  }
};
