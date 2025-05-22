import {
  global_default
} from "/build/_shared/chunk-WQPUEGAF.js";
import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-XFRNP6LT.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-O6QMN27B.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/cart.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\cart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\cart.jsx"
  );
}
function Cart() {
  _s();
  let cart = useLoaderData();
  const [customerDetails, setCustomerDetails] = (0, import_react.useState)({
    name: "",
    email: "",
    address: ""
  });
  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    });
  };
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Cart" }, void 0, false, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Customer Details" }, void 0, false, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/checkout", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Name:" }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", value: customerDetails.name, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Email:" }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", value: customerDetails.email, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 66,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Address:" }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "address", value: customerDetails.address, onChange: handleChange, required: true }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Products Invoice" }, void 0, false, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Product" }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Price" }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Quantity" }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 79,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Total" }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: cart.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.name }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            item.price
          ] }, void 0, true, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: item.quantity }, void 0, false, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: [
            "$",
            item.price * item.quantity
          ] }, void 0, true, {
            fileName: "app/routes/cart.jsx",
            lineNumber: 88,
            columnNumber: 17
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 84,
          columnNumber: 31
        }, this)) }, void 0, false, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "summary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Subtotal: $",
          subtotal.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "GST (18%): $",
          gst.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          "Grand Total: $",
          grandTotal.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/cart.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { class: "button", type: "submit", children: "Checkout" }, void 0, false, {
        fileName: "app/routes/cart.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cart.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Cart, "R17Rg+Qomwt0JO8AqJUUaX26vZs=", false, function() {
  return [useLoaderData];
});
_c = Cart;
function links() {
  return [{
    rel: "stylesheet",
    href: global_default
  }];
}
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default,
  links
};
//# sourceMappingURL=/build/routes/cart-FZAORCIM.js.map
