export function TypographyDemo() {
  return (
    <div className="space-y-16 max-w-4xl mx-auto p-8">
      {/* H1 */}
      <div>
        <h1 className="typography-h1">
          The Explorimentalist
        </h1>
        <p className="typography-muted mt-2">
          Large heading with Mori font - perfect for hero sections
        </p>
      </div>

      {/* H2 */}
      <div>
        <h2 className="typography-h2">
          Brutalist meets Glassmorphism
        </h2>
        <p className="typography-muted mt-2">
          Section heading with border bottom
        </p>
      </div>

      {/* H3 */}
      <div>
        <h3 className="typography-h3">
          Design System Philosophy
        </h3>
        <p className="typography-muted mt-2">
          Subsection heading
        </p>
      </div>

      {/* H4 */}
      <div>
        <h4 className="typography-h4">
          Typography Hierarchy
        </h4>
        <p className="typography-muted mt-2">
          Smaller heading for detailed sections
        </p>
      </div>

      {/* Paragraph */}
      <div>
        <p className="typography-p">
          This is a paragraph using Geist font. It provides excellent readability 
          for body text while maintaining a modern, clean aesthetic that complements 
          the Mori headings perfectly.
        </p>
        <p className="typography-p">
          Subsequent paragraphs have proper spacing and maintain the established 
          rhythm of the typography system.
        </p>
      </div>

      {/* Lead */}
      <div>
        <p className="typography-lead">
          A lead paragraph that stands out from regular body text, 
          perfect for introductory content or important statements.
        </p>
      </div>

      {/* Large */}
      <div>
        <div className="typography-large">
          Large text for emphasis without being a heading
        </div>
      </div>

      {/* Small */}
      <div>
        <small className="typography-small">
          Small text for captions, footnotes, or secondary information
        </small>
      </div>

      {/* Muted */}
      <div>
        <p className="typography-muted">
          Muted text for less important information or subtle hints
        </p>
      </div>

      {/* Blockquote */}
      <blockquote className="typography-blockquote">
        &ldquo;The tension between brutalism and glassmorphism creates a unique 
        design language that is both harsh and soft, opaque and transparent.&rdquo;
      </blockquote>

      {/* List */}
      <ul className="typography-list">
        <li>First item in an unordered list</li>
        <li>Second item with proper spacing</li>
        <li>Third item demonstrating consistency</li>
      </ul>

      <ol className="typography-list list-decimal">
        <li>First numbered item</li>
        <li>Second numbered item</li>
        <li>Third numbered item</li>
      </ol>

      {/* Inline code */}
      <p className="typography-p">
        Use the <code className="typography-inline-code">font-heading</code> class 
        for Mori font and <code className="typography-inline-code">font-body</code> for Geist.
      </p>

      {/* Table */}
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Font
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Usage
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Mori
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Headings
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                200, 400, 600
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Geist
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Body Text
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Variable weights
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Brutalist Examples */}
      <div className="space-y-4">
        <h3 className="typography-h3">Brutalist Typography Variations</h3>
        
        <div className="text-brutalist text-6xl">
          BRUTALIST
        </div>
        
        <div className="text-heading-light text-3xl">
          Light Heading
        </div>
        
        <div className="text-heading-semibold text-3xl">
          SemiBold Heading
        </div>
        
        <div className="glass-text bg-black p-4 rounded text-2xl">
          Glass Text Effect
        </div>
      </div>
    </div>
  )
}