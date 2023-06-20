export default function Carts(){
  return (
    <table className="table align-middle">
    <tbody className="">
      <tr>
        <td><a></a></td>
        <td><img></img></td>
        <td>Rainbow Donuts<br/><small>NT$220</small></td>
        <td><select className="form-select"></select></td>
        <td>
          NT$440
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={5} className="text-end">總金額 NT$440</td>
      </tr>
    </tfoot>
  </table>
  )
}