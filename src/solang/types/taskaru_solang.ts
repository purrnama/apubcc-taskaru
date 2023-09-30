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
      "name": "submitSolution",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "resetAll",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
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
    },
    {
      "name": "getIsSubmittedSolution",
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
    },
    {
      "name": "getTaskStatus",
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
        "defined": "TaskStatus"
      }
    }
  ],
  "types": [
    {
      "name": "TaskStatus",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isAcceptedTask",
            "type": "bool"
          },
          {
            "name": "isSubmittedSolution",
            "type": "bool"
          }
        ]
      }
    },
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
            "name": "isSubmittedSolution",
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
    "address": "8cTeqUjgcLhLhD6nzVoioJ8sbDnitsz86TtFSNjyrVnr"
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
      "name": "submitSolution",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "resetAll",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
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
    },
    {
      "name": "getIsSubmittedSolution",
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
    },
    {
      "name": "getTaskStatus",
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
        "defined": "TaskStatus"
      }
    }
  ],
  "types": [
    {
      "name": "TaskStatus",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isAcceptedTask",
            "type": "bool"
          },
          {
            "name": "isSubmittedSolution",
            "type": "bool"
          }
        ]
      }
    },
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
            "name": "isSubmittedSolution",
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
    "address": "8cTeqUjgcLhLhD6nzVoioJ8sbDnitsz86TtFSNjyrVnr"
  }
};
